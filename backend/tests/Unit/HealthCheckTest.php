<?php

namespace App\Tests\Unit;

use PHPUnit\Framework\TestCase;

/**
 * Test simple pour verifier que PHPUnit fonctionne correctement.
 * Ce test ne teste pas de logique metier, il valide juste le setup.
 */
class HealthCheckTest extends TestCase
{
    public function testPhpUnitIsWorking(): void
    {
        // Assertion simple : true === true
        $this->assertTrue(true);
    }

    public function testPhpVersionIsCompatible(): void
    {
        // Verifie que PHP >= 8.2 (requis par Symfony 7)
        $this->assertGreaterThanOrEqual(
            '8.2.0',
            PHP_VERSION,
            'PHP 8.2 ou superieur est requis'
        );
    }

    public function testAssertionsWork(): void
    {
        // Test des assertions de base
        $this->assertEquals(4, 2 + 2);
        $this->assertNotEmpty('M-Motors');
        $this->assertIsArray([]);
    }
}
